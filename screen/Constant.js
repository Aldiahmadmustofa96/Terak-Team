export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

export const categories = [
	{
		id: "01",
		category: "Breakfast",
	},
	{
		id: "02",
		category: "Lunch",
	},
	{
		id: "03",
		category: "Dinner",
	},
	{
		id: "04",
		category: "Desserts",
	},
	{
		id: "05",
		category: "Seafood",
	},
];

export const recipeList = [
	{
		id: "01",
		name: "Banana Pancake",
		image: require("../assets/image/Fluffy Banana Pancakes.png"),
		rating: "4.8",
		ingredients: ["Tepung", "Susu", "Pisang", "Telur", "Baking Soda 1/2 Sdt"],
		time: "20 mins",
		difficulty: "Easy",
        calories: "260 cal",
		color: "#006A4E",
		description:
			"Hidangan lezat dan menyegarkan yang memiliki campuran unsur pisang dan sangat creamy.",
		steps: [
			"Campurkan semua bahan, silakan sesuaikan rasio tepung, susu, dan pisang untuk mencapai konsistensi adonan yang diinginkan.",
			"Tuangkan satu sendok sayur adonan ke atas wajan antilengket, masak hingga mengembang dan kecoklatan.",
			"Ulangi terus sampe adonan habis.",
			"Topping dan selai/madu bisa disesuaikan dengan selera masing-masing.",
		],
	},
	{
		id: "02",
		name: "Tumis Tauge, Wortel, Udang",
		image: require("../assets/image/Tumis Tauge.png"),
		rating: "5.0",
		ingredients: [
			"200 gram tauge",
			"3 buah wortel, potong korek api",
			"100 gram udang manis",
			"3 batang daun bawang, potong",
            "Gula, garam, kaldu jamur secukupnya",
            "1 sdt saos tiram",
            "1/2 sdt minyak wijen",
            "100 ml air",
            "Minyak",
            "1/2 buah bawang bombay",
            "2 siung bawang putih",
		],
		time: "30 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#f39c12",
		description:
			"Makanan yang menenangkan dengan tauge, udang goreng yang kaya rasa, dan wortel campur.",
		steps: [
			"Rebus udang hingga mendidih, cuci bersih, tiriskan.",
			"Panaskan minyak, tumis bumbu iris hingga harum dan layu. Masukkan udang, Wortel, aduk masak hingga wortel layu.",
			"Lalu masukkan tauge, daun bawang, gula, garam, kaldu jamur, air, saos tiram, minyak wijen. Aduk rata. Masak hingga matang, koreksi rasa, angkat, sajikan.",
		],
	},
	{
		id: "03",
		name: "Hot Dog",
		image: require("../assets/image/hotdog.png"),
		rating: "4.6",
		ingredients: ["Roti Hot Dog", "Frankfurters", "Kecap", "Mustard"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#FF0000",
		// description, steps to prepare
		description:
			"Roti hot dog yang diisi dengan frankfurter yang berair diberi saus tomat dan mustard di atasnya untuk keseimbangan rasa yang sempurna.",
		steps: [
			"Panggang atau panaskan frankfurter sampai matang.",
            "Masukkan frankfurter ke dalam roti hot dog.",
            "Peras saus tomat dan mustard di atas frankfurter.",
            "Sajikan dengan lauk kesukaanmu dan selamat menikmati!",
		],
	},
	{
		id: "04",
		name: "Pudding Custard",
		image: require("../assets/image/pudding.png"),
		rating: "4.0",
		ingredients: [
            "1 bungkus jeli",
            "800 cc air",
            "1 liter susu cair",
            "8 sdm tepung custard",
            "20 sdm gula pasir (sesuai selera)",
            "4 kuning telur, kocok rata",
            "1/2 sdt garam",
            "1 sdt esens vanila",
            "Buah-buahan (Raspberry, anggur, stroberi, raspberry, atau sesuai selera)"
        ],
		time: "15 mins",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#d35400",
		description:
			"hidangan penutup lezat yang terbuat dari campuran telur, susu, gula, dan vanila.",
		steps: [
			"Campur semua bahan ke dalam panci",
            "Aduk rata semua bahan",
            "Panaskan di atas kompor dengan api sedang sambil terus diaduk hingga mendidih dan mengental",
            "Tuang ke dalam cetakan dan biarkan beku",
            "Tambahkan topping buah di atasnya",
            "Pudding custard siap dihidangkan",
		],
	},
	{
		id: "05",
		name: "Cumi Asam Manis Saus Tiram Pedas",
		image: require("../assets/image/Cumi Saus Asam.png"),
		rating: "4.8",
		ingredients: [
            "300 gr cumi-cumi, cuci bersih",
            "1 buah jeruk nipis",
            "10 buah cabai rawit (sesuai selera)",
            "3 siung bawang putih",
            "4 siung bawang merah",
            "1/2 buah bawang bombay (jika ukurannya besar)",
            "2 sdm saus tiram",
            "2 sdm saus tomat",
            "1 sdm kecap manis",
            "lada hitam butir secukupnya, haluskan",
            "air secukupnya",
            "garam dan gula secukupnya"
            ],
		time: "45 mins",
		difficulty: "Medium",
		calories: "450 cal",
		color: "#8d4004",
		description:
			"Hidangan khas Indonesia yang terbuat dari cumi-cumi yang dimasak dengan saus asam manis, saus tiram, dan saus pedas.",
		steps: [
			"Potong-potong cumi dan lumuri dengan air jeruk nipis. Diamkan selama 15 menit, bilas bersih.",
            "Tumis bawang bombay hingga agak layu, masukkan bawang putih dan bawang merah.Tumis hingga matang. Masukkan cabai rawit dan tomat, masak hingga matang.",
            "Masukkan cumi dan aduk rata dengan bumbu.",
            "Tuang bahan bumbu, aduk rata hingga mendidih. Tuang air secukupnya dan masak hingga saus mengental. Tes rasa, jika sudah pas, angkat.",
		],
	},
	
];