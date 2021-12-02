type option = { value: any, key: any }
export const arrayMapperToOption =<T extends unknown[]> (params:T) => {
   return (
      params.map(
        (item:any) => (
          {
           value:item.value,
           key:item.key
          }
        )
      ) as option[]
   )

}
