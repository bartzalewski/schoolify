import zszlogo from '../../images/schools/logos/zsz-zabk-logo.gif';
import lologo from '../../images/schools/logos/lo-zabk-logo.jpg';
import sp3logo from '../../images/schools/logos/sp3-zabk-logo.jpg';
import zszfeed from '../../images/feed/zszfeed.jpg';
import lofeed from '../../images/feed/lofeed.png';
import sp3feed from '../../images/feed/sp3feed.jpg';

const initState = {
	posts: [
		{
			id: '1',
			schoolName: 'ZSZ im. Stanisława Staszica w Ząbkowicach Śląskich',
			schoolLogo: [zszlogo],
			postBackground: [zszfeed],
			content:
				'19 czerwca 2019 r. o godz. 8.15 w naszej szkole rozpoczął się uroczysty apel z okazji zakończenia roku szkolnego 2018/2019. Uroczystość uświetnili przybyli goście: Przewodniczący Komisji Oświaty i Kultury Pan Stanisław...'
		},
		{
			id: '2',
			schoolName: 'LO im. Władysława Jagiełły w Ząbkowicach Śląskich',
			schoolLogo: [lologo],
			postBackground: [lofeed],
			content:
				'Nadszedł długo wyczekiwany przez nas dzień. Od początku czerwca szykowaliśmy się na rozpoczęcie wakacji. Plany, spotkania, ogniska, to wszystko było w zasięgu ręki, wystarczyło poczekać na odebranie świadectwa, by móc ruszyć w świat. Uroczystość odbyła się w szkolnej auli 19 czerwca o godzinie 8:15.'
		},
		{
			id: '3',
			schoolName: 'SP3 im. Mikołaja Kopernika w Ząbkowicach Śląskich',
			schoolLogo: [sp3logo],
			postBackground: [sp3feed],
			content:
				'Niech żyją wakacje, niech żyje pole i las, i niebo, i słońce, wolny, swobodny czas. Pojedzie z nami piłka i kajak, i skakanka, będziemy grać w siatkówkę od samiutkiego ranka.'
		}
	]
};

const postReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_POST':
			console.log('created post', action.post);
			return state;
		case 'CREATE_POST_ERROR':
			console.log('create post error', action.err);
			return state;
		default:
			return state;
	}
};

export default postReducer;
