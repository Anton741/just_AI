export function dateTransform(date){
  const new_date = new Date(date)
  let mounth
  switch (new_date.getMonth() + 1) {
    case 1:
      mounth = "Январь"
      break;
      case 2:
      mounth = "Февраль"
      break;
      case 3:
      mounth = "Март"
      break;
      case 4:
      mounth = "Апрель"
      break;
      case 5:
      mounth = "Май"
      break;
      case 6:
      mounth = "Июнь"
      break;
      case 7:
      mounth = "Июль"
      break;
      case 8:
      mounth = "Август"
      break;
      case 9:
      mounth = "Сентябрь"
      break;
      case 10:
      mounth = "Октябрь"
      break;
      case 11:
      mounth = "Ноябрь"
      break;
      case 12:
      mounth = "Декабрь"
      break;
    default:
      break;
  }
  return `${new_date.getDate()} ${mounth} ${new_date.getFullYear()}  ${addZero(new_date.getHours())}:${addZero(new_date.getMinutes())}   
  `
}

function addZero(num){
  return String(num).length ===1 ? '0' + String(num): String(num)
}