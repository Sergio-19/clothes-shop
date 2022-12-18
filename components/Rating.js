
const Rating = ({rating}) => {


    let rateArr = []
    for(let i = 0; i < Math.ceil(rating); i++){
        rateArr.push(i+1)
    }

    return (
        <div className = 'rating__wrap'>
           {rateArr.map((i)=> {
            return(
                <i className = 'fa fa-star' key = {i} style = {{color: '#2d2d2d'}}/>
            )
           })} 
        </div>
    )
}


export default Rating;