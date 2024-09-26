import MenuItem from "./MenuItem"

const MenuList = ({list = []}) => {
  return (
    <div className="menu-list-container">
      {
        list && list.length ?
        list.map(listitem => <MenuItem item={listitem}/> )
        : null
      }
      </div>
  )
}
export default MenuList