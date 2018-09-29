import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService{
  getPagination(totalItems: number, currentPage: number = 1, itemsQuantity: number) {
      
      let totalPages = Math.ceil(totalItems / itemsQuantity);

      if (currentPage < 1) {
          currentPage = 1;
      } else if (currentPage > totalPages) {
          currentPage = totalPages;
      }

      let startPage: number = 1;
      let endPage: number = totalPages;

      let startIndex = (currentPage - 1) * itemsQuantity;
      let endIndex = Math.min(startIndex + itemsQuantity - 1, totalItems - 1);

      let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

      return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: itemsQuantity,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
      };
  }
}