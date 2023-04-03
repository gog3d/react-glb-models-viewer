import { useCustomization } from "../context/Customization";

const Configurator = () => {
  const {lid, setLid, lidColor, setLidColor, cupColor, setCupColor, cupColors, lidColors} = useCustomization();
  //console.log(material);
  return (
    <div className='configurator'>
      
      <div className='configurator__section'>
        <div className='configurator__section_title'>
          Конструкция стакана
        </div>
        <div className='configurator__section__values'>
          <div className={`item ${lid ? 'item--active' : ''}`} 
            onClick={()=>setLid(true)}
          >
            <div className='item__label'>
              С крышкой
            </div>
          </div>
          
          <div className={`item ${lid ? '' : 'item--active'}`} 
            onClick={()=>setLid(false)}
          > 
            <div className='item__label'>
              Без крышки
            </div>
          </div>        
        </div>      
      </div>
     
      <div className='configurator__section'>
        <div className='configurator__section_title'>
          Цвет стакана
        </div>
        <div className='configurator__section__values'>
        { cupColors.map((item, index) => (
          <div className={`item ${item.color === cupColor.color ? 'item--active' : ''}`} 
            onClick={()=>setCupColor(item)}
            key={index}
          >
            <div className='item__dot' style={{
              backgroundColor: item.color,
            }}/>
            {/*<div className='item__label'>{item.name}</div>*/}
          </div>
        ))}
        </div>      
      </div>

      <div className='configurator__section' style={{display : lid ? '' : 'none' }}>
        <div className='configurator__section_title'>
          Цвет крышки
        </div>
        <div className='configurator__section__values'>
        { lidColors.map((item, index) => (
          <div className={`item ${item.color === lidColor.color ? 'item--active' : ''}`} 
            onClick={()=>setLidColor(item)}
            key={index}
          >
            <div className='item__dot' style={{
              backgroundColor: item.color,
            }}/>
            {/*<div className='item__label'>{item.name}</div>*/}
          </div>
        ))}
        </div>      
      </div>


      
    </div>
  );
};

<div className='configurator__section'></div>


export default Configurator;