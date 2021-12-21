export default (data) => {
  return `<div class="datepicker-days">${data.map(theDate => (
    `<div data-date="${theDate.date.toString()}" class="datepicker-date${theDate.isThisMonth ? ' is-current-month' : ''}${theDate.isDisabled ? ' is-disabled' : ''}${theDate.isRange && theDate.isInRange ? ' datepicker-range' : ''}${theDate.isStartDate ? ' datepicker-range-start' : ''}${theDate.isEndDate ? ' datepicker-range-end' : ''}">
      <button disabled="${theDate.isDisabled ? true : false}" class="date-item${theDate.isToday ? ' is-today' : ''}${theDate.isHighlighted ? ' is-highlighted' : ''}${theDate.isStartDate ? ' is-active' : ''}" type="button">${theDate.date.getDate()}</button>
  </div>`)).join('')}</div>`;
};