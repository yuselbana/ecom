const data = 
             [
                {
                    id:1,
                    title:"Laptop",
                    image:"https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                    price:999.99,
                    category:"Electronics",
                    description:"This cutting-edge laptop combines sleek design, unrivaled performance, and advanced features to redefine your computing experience. Whether you're a creative genius, a multitasking master, or a gaming aficionado, this laptop is tailored to meet your every need."
                },
                {
                    id:2,
                    title:"Tablet",
                    image:"https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                    price:499.99,
                    category:"Electronics",
                    description:"A sleek and powerful tablet that combines cutting-edge technology with effortless portability, providing you with the ultimate on-the-go computing experience. "
                },
                {
                    id:3,
                    title:"Wireless Mouse",
                    image:"https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=881&q=80",
                    price:49.99,
                    category:"Electronics",
                    description:"With its advanced optical sensor and effortless connectivity, this mouse enhances your productivity and gaming experience with smooth and responsive performance."
                },
                {
                    id:4,
                    title:"Monitor",
                    image:"https://images.unsplash.com/photo-1570485071395-29b575ea3b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    price:299.99,
                    category:"Electronics",
                    description:"Immerse yourself in stunning visuals and elevate your productivity with our high-performance monitor. With its expansive screen real estate and vibrant color accuracy, the VisionX Pro delivers an unparalleled viewing experience, whether you're working on intricate designs, editing videos, or enjoying your favorite movies and games."
                },
                {
                    id:5,
                    title:"PC",
                    image:"https://images.unsplash.com/photo-1619455052599-4cded9ae462a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
                    price:"1499.99",
                    category:"Electronics",
                    description:"Powered by a high-performance Intel Core i9 processor and an advanced NVIDIA GeForce RTX graphics card, this gaming beast delivers unmatched speed, stunning visuals, and seamless gameplay. Immerse yourself in the world of gaming like never before and dominate every virtual battlefield."
                },
                {
                    id:6,
                    title:"Mechanical Keyboard",
                    image:"https://images.unsplash.com/photo-1625130694338-4110ba634e59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
                    price:"149.99",
                    category:"Electronics",
                    description:"Designed with precision and crafted for performance, this keyboard offers an unparalleled typing experience that will revolutionize your productivity and gaming sessions."
                },
                {   
                    id:7,
                    title:"iPhone",
                    image:"https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80",
                    price:"899.99",
                    category:"Electronics",
                    description:"Prepare to be captivated by its seamless blend of beauty, power, and innovation, as this smartphone pushes the boundaries of whats possible."
                },
                {   
                    id:8,
                    title:"Blue Yeti Microphone",
                    image:"https://images.unsplash.com/photo-1583665606514-e0f81cc5cded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
                    price:"129.99",
                    category:"Electronics",
                    description:"Introducing the Blue Yeti Microphone, the ultimate tool for capturing professional-grade audio with unmatched clarity and versatility."
                },
                {   
                    id:9,
                    title:"Google Router",
                    image:"https://images.unsplash.com/photo-1525004065538-5177b78faf50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                    price:"119.99",
                    category:"Electronics",
                    description:"Your gateway to a fast and reliable internet connection. This cutting-edge router is designed to revolutionize your home or office network, providing seamless connectivity and exceptional performance for all your internet needs."
                },
                {   
                    id:10,
                    title:"Gaming Headset",
                    image:"https://images.unsplash.com/photo-1659186198156-f0372a4fdc5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                    price:"99.99",
                    category:"Electronics",
                    description:"Immerse yourself in the world of gaming with unparalleled audio quality, exceptional comfort, and cutting-edge features that will take your gaming experience to new heights."
                },
                
                {
                    id:11,
                    title:"Yellow Chair",
                    image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80",
                    price:"149.99",
                    category:"Furniture",
                    description:"Experience unparalleled comfort and support with our ergonomically designed chair. With adjustable features, premium cushioning, and a stylish modern design, this chair will enhance your workspace and make sitting a pleasure."
                }, 
                {
                    id:12,
                    title:"Red Chair",
                    image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80",
                    price:"149.99",
                    category:"Furniture",
                    description:"Experience unparalleled comfort and support with our ergonomically designed chair. With adjustable features, premium cushioning, and a stylish modern design, this chair will enhance your workspace and make sitting a pleasure."
                }, 
                {
                    id:13,
                    title:"test2",
                    image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80",
                    price:"149.99",
                    category:"Furniture",
                    description:"Experience unparalleled comfort and support with our ergonomically designed chair. With adjustable features, premium cushioning, and a stylish modern design, this chair will enhance your workspace and make sitting a pleasure."
                },
                {
                    id:14,
                    title:"test3",
                    image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80",
                    price:"149.99",
                    category:"Furniture",
                    description:"Experience unparalleled comfort and support with our ergonomically designed chair. With adjustable features, premium cushioning, and a stylish modern design, this chair will enhance your workspace and make sitting a pleasure."
                }
                
                
                
            ]
 
 export default data
 