import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;

    return (
        <div className='category-container'>
          <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
          }}            
          />
          <div className="category-body-container">
            <h2 className='category-type'>{title}</h2>
            <p className='category-sub-type'>Shop here</p>
          </div>
        </div>
    )
}

export default CategoryItem