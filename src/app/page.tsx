import {
  Container,
  Filters,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Всі піци' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[60px]'>
          {/* Фільтрація */}
          <div className='w-[250px]'>
            <Filters />
          </div>
          {/* Список товарів */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              {/* <ProductGroupList
                title='Піцци'
                item={[1, 2, 3, 4, 5]}
              />
              <ProductGroupList
                title='Комбо'
                item={[1, 2, 3, 4, 5]}
              /> */}
              список товарів
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
