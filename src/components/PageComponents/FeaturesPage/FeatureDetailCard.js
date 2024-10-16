const FeatureDetailCard  = ({id, img, title, content}) => {
    return (
        <>
            <div className="feature-detail-card fadeUp">
                <div className="text-left w-full">
                    <div className="cards-num">
                        <span className="aeonik">
                            {id}
                        </span>
                    </div>
                </div>
                <div className="img">
                    <img 
                        loading="lazy"
                        height="185"
                        width="270"
                        src={img} 
                        alt={title} 
                        title={title}
                    />
                </div>
                <div>
                    <h5 className="title aeonik">
                        {title}
                    </h5>
                    <p className="content-p">
                        {content}
                    </p>
                </div>
            </div>
        </>
    )
}

export default FeatureDetailCard;