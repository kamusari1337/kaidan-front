import {FiLayers, FiSearch} from "react-icons/fi";

export default function Home() {
  return (
      <>
        <div className="header bg-primary px-80">
          <div className="wrapper flex items-center justify-between text-center h-16 mx-4">
            <h1 className="logo text-36">Kaidan</h1>
            <nav className="navbar flex justify-between gap-x-4">
              <div className="nav-item flex items-center justify-between gap-2">
                <FiLayers color="white"/>
                Каталог
              </div>
              <div className="nav-item flex items-center justify-between gap-2">
                <FiSearch/>
                Поиск
              </div>
            </nav>
            <div className="user bg-white w-8 h-8 rounded-sm"></div>
          </div>
        </div>
        <div className="wrapper mx-80 w-auto h-auto ">
          <div className="popular bg-primary rounded-xl my-16 px-4 py-3">
            <div className="card w-36">
              <div className="img w-36 h-48 bg-white rounded-xl"></div>
              <div className="title text-16">Название</div>
              <div className="type text-14 opacity-70">Тип</div>
            </div>
          </div>

          <div className="wrapper grid grid-cols-2 gap-6">
            <div className="last-updates flex flex-col bg-primary h-auto rounded-xl">
              <div
                  className="last-updates__header flex items-center justify-between px-4 bottom-border">
                <div className="title">
                  Последние обновления
                </div>
                <div className="updates__tabs flex items-center justify-between gap-6">
                  <div className="all-updates__tab py-3">
                    Все обновления
                  </div>
                  <div className="user-updates__tab accent-border py-3">
                    Мои обновления
                  </div>
                </div>
              </div>
              <div className="last-updates__content">
                <div className="card flex gap-2 px-4 py-3 bottom-border">
                  <div className="image bg-foreground w-24 h-32 rounded-xl"></div>
                  <div className="card__content flex flex-col items-left justify-center gap-y-2">
                    <div className="title text-16">
                      Название
                    </div>
                    <div className="latest-episode text-15">
                      Эпизод 3
                    </div>
                    <div className="time-passed text-14 opacity-70">
                      10 минут назад
                    </div>
                  </div>
                </div>
              </div>
              <div className="load-more px-4 py-3">
                Показать еще
              </div>
            </div>
            <div className="latest-feedbacks flex flex-col h-auto">
              <div className="header px-4">
                Последние отзывы
              </div>
              <div className="latest-feedbacks__content">
                письки
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
