import * as aws from "@pulumi/aws";
import * as docker from "@pulumi/docker";
import * as pulumi from "@pulumi/pulumi";

// Configure AWS region
const awsRegion = new aws.Provider("aws", {
    region: "us-west-2", // Change to your preferred AWS region
});

// Create an ECR repository to store your Docker image
const repo = new aws.ecr.Repository("my-repo", {});

// Build and publish the Docker image to ECR
const image = new docker.Image("my-image", {
    imageName: pulumi.interpolate`${repo.repositoryUrl}:latest`,
    build: {
        context: "../", // Assuming your Dockerfile is in the current directory
    },
    registry: {
        server: repo.repositoryUrl,
        username: aws.config.accessKey,
        password: aws.config.secretKey,
    },
});

// Create an EC2 instance with ARM architecture
const instance = new aws.ec2.Instance("my-instance", {
    instanceType: "t4g.micro", // Choose an ARM-based instance type
    ami: "ami-xxxxxxxx", // Replace with the ARM-based AMI for your region
    userData: `#!/bin/bash
    docker run --restart=always -p 80:3000 ${image.imageName}`, // Replace 3000 with your Next.js app port
}, { provider: awsRegion });

// Allocate an Elastic IP
const eip = new aws.ec2.Eip("my-eip", {
    instance: instance.id,
}, { provider: awsRegion });

// Create a new Route 53 hosted zone for your domain
const hostedZone = new aws.route53.Zone("my-hosted-zone", {
    name: "example.com", // Replace with your registered domain name
}, { provider: awsRegion });

// Create a DNS record set to point to the Elastic IP
const record = new aws.route53.Record("my-record", {
    zoneId: hostedZone.zoneId,
    name: "www.example.com", // Replace with your desired subdomain
    type: "A",
    ttl: 300,
    records: [eip.publicIp],
}, { provider: awsRegion });

// Export the DNS name and Elastic IP
export const publicDns = instance.publicDns;
export const elasticIp = eip.publicIp;
