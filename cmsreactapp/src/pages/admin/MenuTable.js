import React, { useMemo } from 'react'
import MenuItemService from '../../services/MenuItemService '
import { MenuItemTableColumns } from './MenuItemsTableColumns';
import TableComponent from '../../components/common/TableComponent';
import TableColumnFilter from '../../components/common/TableColumnFilter';
export default function MenuTable({onAddToMenu}) {
    const items = MenuItemService.getItems();
    const columns = useMemo(()=>MenuItemTableColumns,[]);
    
    const handleAddToMenuClick = (item) => {
        // Call the onAddToMenu function with the selected item
        onAddToMenu(item);
      };
    
  return (
    
    <div>
        <TableComponent
        colStructure={columns}
        data={items}
        filterClass={TableColumnFilter}
      ></TableComponent>
            {items.map((item) => (
        <button key={item.id} onClick={() => handleAddToMenuClick(item)}>
          Add to Menu
        </button>
      ))}
    </div>
  )
}
