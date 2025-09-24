import { Button } from './button'
import { Input } from './input'
import { SearchComponet } from './searchComponet'

interface SearchProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
} 

export const Search:React.FC<SearchProps> = ({handleChange}) => {
  const options = [
    { value: '', label: 'All Categories' },
    { value: `men's clothing`, label: 'men clothing' },
    { value: `jewelery`, label: 'jewelery' },
     { value: `electronics`, label: 'electronics' },
        { value: `women's clothing`, label: 'women clothing' },
  ]

  return (
    <div className="p-4 w-11/12 mx-auto flex flex-col md:flex-row gap-4 pt-8 items-stretch">
      <div className="flex-1 min-w-[150px]">
        <Input name='description'  onChange={handleChange}  type="search" className="bg-white w-full" placeholder="Search products.." />
      </div>
      <div className="w-full md:w-[180px]">
        <SearchComponet   
         name="category"         
          options={options}     
          handleChange={handleChange} />
      </div>
      <div className="w-full md:w-[120px]">
        <Button className="w-full bg-gray-200 text-gray-500">Filters</Button>
      </div>
    </div>
  )
}
