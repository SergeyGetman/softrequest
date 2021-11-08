
type ISetCity = {
  type : string,
  city : (object | string)
}

export const setCity = (city : object | string): ISetCity => ({
  type: 'SET_CITY',
  city: city,
});