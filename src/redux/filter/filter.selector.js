import { createSelector } from '@reduxjs/toolkit';
import { selectBills } from '../bills/bills.selectors';

export const selectedFilter = state => state.filter;

export const selectFilteredBills = createSelector(
  [selectBills, selectedFilter],
  (bills, filteredItems) => {


    if (filteredItems.includes("All")) {
      return bills;
    } else {

      let chosenBills = [];
      for (let i = 0; i < filteredItems.length; i++){
        const ispresent = bills.filter(bill => bill.companyName === filteredItems[i]);
        
        chosenBills.push(...ispresent)

      }
    return chosenBills;
     
    }
    
  }
);
