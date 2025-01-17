

const FoodBox = ({ name, calories, image, quantity, addCart }) => {

    return (
        <div className="box shorten" >
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image} alt="food pic" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{name}</strong> <br />
                            <small>{calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={addCart}>
                                +
                                </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox;