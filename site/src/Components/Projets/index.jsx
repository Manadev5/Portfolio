

function projets(id,cover ,title){
return(

  
    <div key ={id} className="image-container">
        <img src = {cover} alt={title} />
        <h3>{title}</h3>
    </div>

)

}

export default projets