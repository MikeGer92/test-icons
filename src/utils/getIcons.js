const faIcons = require('font-awesome-v5-icons');
// import * as faIcons from 'font-awesome-v5-icons';

console.log(faIcons)

faIcons.getList().then(icons => console.log(icons.length));

const getIcon = async () => {
    const allList = await faIcons.getList(icons => icons);
    let idx = Math.floor(Math.random() * allList.length)
    const icon = allList[idx]
    console.log(icon)
    return icon
};
getIcon()
// console.log(1)
// export default