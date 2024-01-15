import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ProductType } from "../../type/type";
import Link from "next/link";
import { ChangeEvent, useRef } from "react";
interface Props {
  dataShopProducts: ProductType[];
}

const Shop: NextPage<Props> = ({ dataShopProducts }) => {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(router);
  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className={`${
                  !router.query.gender ? `how-active1` : null
                } stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5`}
                data-filter="*"
                onClick={() => {
                  router.replace({
                    pathname: `/shop`,
                    query: {},
                  });
                }}
              >
                All Products
              </button>

              <button
                className={`${
                  router.query.gender == `women` ? `how-active1` : null
                } stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5`}
                data-filter=".women"
                onClick={() => {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      gender: `women`,
                    },
                  });
                }}
              >
                Women
              </button>

              <button
                className={`${
                  router.query.gender == `man` ? `how-active1` : null
                } stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5`}
                data-filter=".men"
                onClick={() => {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      gender: `man`,
                      
                    },
                  });
                }}
              >
                Men
              </button>

              <button
                className={`${
                  router.query.text == `Herschel supply Belt`
                    ? `how-active1`
                    : null
                } stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5`}
                data-filter=".bag"
                onClick={() =>
                  {
                    router.push({
                      pathname: `/shop`,
                      query: {
                        ...router.query,
                        text: `Herschel supply Belt`,
                      },
                    });
                  }
                }
              >
                Belt
              </button>
              
              <button
                className={`${
                  router.query.text == `Converse All Star Hi Plimsolls`
                    ? `how-active1`
                    : null
                } stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5`}
                data-filter=".shoes"
                onClick={() =>
                 {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      text: `Converse All Star Hi Plimsolls`,
                    },
                  });
                 }
                }
              >
                Shoes
              </button>

              <button
                className={`${
                  router.query.text == `Mini Silver Mesh Watch`
                    ? `how-active1`
                    : null
                } stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5`}
                data-filter=".watches"
                onClick={() =>
                  {
                    router.push({
                      pathname: `/shop`,
                      query: {
                        ...router.query,
                        text: `Mini Silver Mesh Watch`,
                      },
                    });
                  }
                 
                }
              >
                Watches
              </button>
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search show-search"  onClick={() => {
                    {
                      inputRef.current?.value === ""
                        ? router.push({
                            pathname: "/shop",
                          })
                        : router.push({
                            pathname: "/shop",
                            query: {
                              ...router.query,
                              text: inputRef.current?.value,
                            },
                          });
                    }
                    inputRef.current!.value = "";
                  }}>
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                Search
              </div>
            </div>

            {/* search */}
            <div className="panel-search w-full p-t-10 p-b-15">
              <div className="bor8 dis-flex p-l-15">
                <button
                  className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04"
                  onClick={() => {
                    {
                      inputRef.current?.value === ""
                        ? router.push({
                            pathname: "/shop",
                          })
                        : router.push({
                            pathname: "/shop",
                            query: {
                              ...router.query,
                              text: inputRef.current?.value,
                            },
                          });
                    }
                    inputRef.current!.value = "";
                  }}
                >
                  <i className="zmdi zmdi-search"></i>
                </button>

                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                  ref={inputRef}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    event.preventDefault();
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row isotope-grid">
            {dataShopProducts.length > 0 ? (dataShopProducts.map((product) => {
              return (
                <div
                  className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
                  key={product.id}
                >
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src={product.img} alt={product.gender} />
                      <Link href={`/shop/${product.id}`}>
                        <a className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                          View Details
                        </a>
                      </Link>
                    </div>

                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <a
                          href="product-detail.html"
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          {product.title}
                        </a>

                        <span className="stext-105 cl3">{product.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })) : (<p>Sorry no Items to Show</p>)}
          </div>

          <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
            <a
              href="#"
              className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
            >
              1
            </a>

            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              2
            </a>

            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              3
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let res;
  if (query.gender && query.text) {
    res = await fetch(
      `http://localhost:5001/products?gender_like=${query.gender}&q=${query.text}`
    );
  } else if (query.gender) {
    res = await fetch(
      `http://localhost:5001/products?gender_like=${query.gender}`
    );
  } else if (query.text) {
    res = await fetch(`http://localhost:5001/products?q=${query.text}`);
  } else {
    res = await fetch(`http://localhost:5001/products`);
  }
  const dataShopProducts: ProductType[] = await res?.json();

  return {
    props: {
      dataShopProducts: dataShopProducts,
    },
  };
};
