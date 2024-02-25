'use client'

function Modal({ closeModal, contentNum, contentType }: { closeModal: any, contentNum: string, contentType: string }) {
    const workContentTemplate = ({ description, responsibilities, experience }: { description: string, responsibilities: string[], experience: string[] }) => {
        return (
            <>
            <h3 id="company">Introduction</h3>
            <p>{description}</p>
            <h3 id="responsibility">Responsibility</h3>
            <ul>
                {responsibilities.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <h3 id="experience">Experience</h3>
            <ul>
                {experience.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            </>
        )
    }
    // const goalContentTemplate = ()
    const contentSwitch = (contentNum: string) => {
        switch (contentNum) {
            case 'vanyi':
                return (
                    workContentTemplate({
                        description: 'A three years startup. provide healthcare service for the aging population, aim for improve life quality for older people. Have multiple facilities in Taiwan, right now.',
                        responsibilities: [
                            'Build / maintain cloud service in GCP (GKE)',
                            'Build pipeline for CI/CD',
                            'Develop backend system'
                        ],
                        experience: [
                            'Build cloud service from scratch. Including virtual private network, GKE cluster, storage.. etc.',
                            'Developing payment system. Transition company\'s income from physical stores to a seamless online payment process.',
                            'Improve system\'s CI/CD process for seamless operations with zero downtime in any scenario.'
                        ]
                    })
                )
            case 'anfu':
                return (
                    workContentTemplate({
                        description: 'Professional real estate appraisal company collaborating with numerous banks in Taiwan. Running a website that helping people easily estimate the value of your property and stay informed about the latest trends in your area. aim to reduce information asymmetry in real estate market in Taiwan.',
                        responsibilities: [
                            'Geospatial data computation (PostGIS, geopandas)',
                            'Develop / Maintain backend system.',
                            'Design and develop payment system for company\'s website'
                        ],
                        experience: [
                            'Implement geospatial algorithm to compute the specific area\'s property cluster. Let data qulity be more accurate and reliable.',
                            'Develop robust payment system for company to generate more income path.'
                        ]
                    })
                )
            case 'touchWhale':
                return (
                    <>
                    <h3>Introduction</h3>
                    <p>Collaborated with my friend to develop an EPR system tailored for E-commerce purposes. this ERP using a small-scale e-commerce(<a href="https://shopee.tw/sixstar" target="_blank">website</a>) for now.</p>
                    <img src="/portfolio/touchWhale.png" alt="Touch Whale" />
                    </>
                )
            case 'coinLog':
                return (
                    <>
                    <h3>Introduction</h3>
                    <p>A website integrate Binance API, Collect my investment infomation (profit, marketcap etc) and trade on specific condition.</p>
                    <img src="/portfolio/coinLog.png" alt="CoinLog" />
                    </>
                )
        }
    }

  return (
    <div onClick={() => closeModal(false)} className=" w-[100vw] h-[100vh] bg-transparent flex justify-center items-center fixed z-10">
        <div className="w-2/3 h-5/6 overflow-auto bg-white rounded-md flex flex-col p-5" style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
            <div className="flex justify-end">
            <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="flex flex-col prose prose-lg">
                {contentSwitch(contentNum)}
            </div>
        </div>
    </div>
  )
}
export default Modal