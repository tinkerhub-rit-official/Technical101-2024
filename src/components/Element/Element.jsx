import './Element.css'

export default function Element({heading ,link, description}) {
    return(
        <a href={link} className="childDiv" target='_blank'>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
                <div style={{width: '80%'}}>
                    <h3 className={"Heading"}>{heading}</h3>
                    <p>{description}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className={'openIcon'} width="32" height="32" fill="#bfc2ca" viewBox="0 0 256 256">
                    <path
                        d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                </svg>
            </div>
        </a>
    )
}