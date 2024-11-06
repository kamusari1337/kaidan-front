export default function ProfilePage({params}: { params: { userId: string } }) {
	return (
		<>
			<div className="wrapper mx-80">
				<div className="user-bar bg-primary rounded-lg mt-16 mx-auto">
					<div className="user-info flex flex-row justify-between items-center px-4 py-3 bottom-border">
						<div className="info flex flex-row items-center gap-6">
							<div className="avatar w-12 h-12 bg-foreground rounded-sm">
							</div>
							<div className="details">
								<div className="top flex items-center gap-2">
									<div className="nickname font-bold text-16">stepppp</div>
									<div className="latest-online text-12">Последний вход: 2 часа назад</div>
								</div>
								<div className="bottom text-13 flex flex-row items-center gap-2">
									<div className="">
										Уровень 3
									</div>
									<div className="">Топ #Неопределен</div>
								</div>
							</div>
						</div>
						<div className="actions">
							Настройки
						</div>
					</div>
					<div className="tabs flex flex-row gap-6 px-4 text-14">
						<div className="tab-item accent-border py-3">Тайтлы</div>
						<div className="tab-item py-3">Комментарии</div>
						<div className="tab-item py-3">Отзывы</div>
					</div>
				</div>
				<div className="lists flex flex-row gap-6 mt-4 rounded-lg">
					<div className="sidebar bg-primary w-60 rounded-lg p-1">
						<div className="header p-2">
							Списки
						</div>
						<div className="categories">
							<div className="category p-2">Все</div>
							<div className="category p-2">Читаю</div>
							<div className="category p-2">В планах</div>
							<div className="category p-2">Брошено</div>
							<div className="category p-2">Прочитано</div>
							<div className="category p-2">Любимые</div>
						</div>
						<div className="filters">
							<div className="filter p-2">По названию (A-Z)</div>
							<div className="filter p-2">По названию (А-Я)</div>
							<div className="filter p-2">Дате добавления</div>
							<div className="filter p-2">По убыванию</div>
							<div className="filter p-2">По возрастанию</div>
						</div>
					</div>
					<div className="list w-full flex flex-col gap-6">
						<div className="search bg-primary rounded-lg p-6">Поиск</div>
						<div className="items py-2 flex flex-col bg-primary rounded-lg">
							<div className="card py-2 px-4 flex flex-row items-center gap-6">
								<div className="image w-24 h-28 bg-foreground rounded"></div>
								<div className="info w-full flex flex-row items-center justify-between">
									<div className="title-section flex flex-col gap-4">
										<div className="title text-15">Название</div>
										<div className="series text-13">Посмотрено 1/1</div>
									</div>
									<div className="added-at text-13">
										<div className="header">Добавлено</div>
										<div className="date">21.10.2024</div>
									</div>
									<div
										className="actions text-30">
										...
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}