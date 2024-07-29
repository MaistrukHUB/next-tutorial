import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
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
              <ProductsGroupList
                categoryId={1}
                title={"Піци"}
                products={[
                  {
                    id: 0,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 12,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 32,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 43,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 19,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 1,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 2,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 3,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 4,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                ]}
              />
              <ProductsGroupList
                categoryId={2}
                title={"Комбо"}
                products={[
                  {
                    id: 0,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 12,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 32,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 43,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 19,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 1,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 2,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 3,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 4,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                ]}
              />
              <ProductsGroupList
                categoryId={3}
                title={"Закуски"}
                products={[
                  {
                    id: 0,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 12,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 32,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 43,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 19,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 1,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 2,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 3,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                  {
                    id: 4,
                    name: "name",
                    price: 666,
                    items: [{ price: 500 }],
                    imageUrl:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzZAyQtd6dyMRgp81aVEoSLccyTTxCDBmlaYNDGYwFRZUeUDamsvBIK_BRYzjdHwntxKmiCj1eyaAa8QCdsDjpXkHYv_lRq__Xvii94lR689X9rYRLWPf5OA&usqp=CAE",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
