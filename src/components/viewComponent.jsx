function View({children, onclick, style}){
    return(
        <div>
            <h3 onClick={onclick} style={style}>
                {children}
            </h3>
        </div>
    )
}

export default View;



