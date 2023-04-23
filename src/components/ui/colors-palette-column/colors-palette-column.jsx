import styles from './colors-palette-column.module.css';

const ColorsPaletteColumn = (props) => {
  const {
    colors,
    setSurface,
    surface
  } = props;

//  console.log(surface.color);

  return (
    <div className={styles['colors']}>
      { colors.map((item, index) => (
        <div className={`${styles['color']} ${item.color === surface.color ? styles['color_active'] : ''}`}
          onClick={()=>setSurface({...surface, color: item.color})}
          key={index}
        >
          <div className={styles['color__dot']} style={{
            backgroundColor: item.color,
          }}/>
          </div>
        ))}
    </div>
  );
};

export default ColorsPaletteColumn;
