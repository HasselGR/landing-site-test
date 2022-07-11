import './showcase.styles.scss'


export const Showcase = () => {
return (
    <div className='showcase-container'>
        <h1>What can you do with us?</h1>
    <div className='showcase'>
        <div>
            <span><img className='showcase-image ' src="https://images.unsplash.com/photo-1653656120693-c987723b2046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="showcase-1" /></span>
            <span><h2 className='sample-text'>Sample text 1</h2></span>
        </div>
        <div>
            <span><img className='showcase-image' src="https://images.unsplash.com/photo-1653656120693-c987723b2046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="showcase-2" /></span>
            <span><h2 className='sample-text'>Sample text 2</h2></span>
        </div>
        <div>
            <span><img className='showcase-image' src="https://images.unsplash.com/photo-1653656120693-c987723b2046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="showcase-3" /></span>
            <span><h2 className='sample-text'>Sample text 3</h2></span>
        </div>
    </div>

    </div>
)

}