export const arrayPosition = ["left", "top", "horizontal", "right", "bottom", "vertical"];
export const arraySize = ["extra-small","small" , "medium",  "large", "extra-large"];

export function createObjeto(tipo) {
    const array = [];
    
        arraySize.forEach((ele) => {
          let obj = {
            value: {
              nome: `${tipo}--${ele}`,
              valor: getSizePixels(ele),
            },
            label: `${tipo} ${ele} ${getSizePixels(ele)}`,
          };
          array.push(obj);
        });
    
    arrayPosition.forEach((position) => {
      arraySize.forEach((size) => {
        let obj = {
          value: {
            nome: `${tipo}-${position}--${size}`,
            valor: getSizePixels(size),
          },
          label: `${tipo} ${position} ${getSizePixels(size)}`,
        };
        array.push(obj);
      });
    });

    return array;
}

export function getSizePixels(ele) {
    switch (ele) {
        case 'extra-large':
            return "48px";
        case 'large':
            return "24px";
        case 'medium':
            return "12px";
        case 'small':
            return "6px";
        case 'extra-small':
            return "3px";
        default:
            break;
    }
}