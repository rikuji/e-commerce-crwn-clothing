// import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ name, id }) => (
            <div key={id}>{name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
