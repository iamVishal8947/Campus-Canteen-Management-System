import React, { useMemo } from 'react'
import MenuItemService from '../../services/MenuItemService '
import { MenuItemTableColumns } from './MenuItemsTableColumns';
import TableComponent from '../../components/common/TableComponentMenu';
import TableColumnFilter from '../../components/common/TableColumnFilter';
export default function MenuTable({onAddToMenu}) {
    const items = MenuItemService.getItems();
    const columns = useMemo(()=>MenuItemTableColumns,[]);
    
    const handleAddToMenuClick = (item) => {
        // Call the onAddToMenu function with the selected item
        console.log(item.original.item_name)
        onAddToMenu(item.original);
      };
    
  return (
    
    <div>
        <TableComponent
        colStructure={columns}
        data={items}
        filterClass={TableColumnFilter} addbtn={handleAddToMenuClick}
      ></TableComponent>
{/* 
<ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} (ID: {item.id})
          <button onClick={() => handleAddToMenuClick(item)}>Add to Menu</button>
        </li>
      ))}
    </ul>
            */}
    </div>
  )
}

