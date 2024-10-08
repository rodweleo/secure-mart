import Blob "mo:base/Blob";
import Cycles "mo:base/ExperimentalCycles";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Types "Types";
import Principal "mo:base/Principal";
import Nat "mo:base/Nat";

actor {

  stable var products : [Types.Product] = [
    {
      id = 1;
      title = "Kiwi";
      description = "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.";
      category = "groceries";
      price = 2.49;
      discountPercentage = 10.32;
      rating = 4.37;
      stock = 1;
      tags = [
        "fruits"
      ];
      sku = "0X3NORB9";
      weight = 8;
      dimensions = {
        width = 27.3;
        height = 7.4;
        depth = 15.08;
      };
      warrantyInformation = "6 months warranty";
      shippingInformation = "Ships in 3-5 business days";
      availabilityStatus = "Low Stock";
      reviews = [
        {
          rating = 5;
          comment = "Very pleased!";
          date = "2024-05-23T08:56:21.620Z";
          reviewerName = "Nora Russell";
          reviewerEmail = "nora.russell@x.dummyjson.com";
        },
        {
          rating = 5;
          comment = "Very pleased!";
          date = "2024-05-23T08:56:21.620Z";
          reviewerName = "Dylan Wells";
          reviewerEmail = "dylan.wells@x.dummyjson.com";
        },
        {
          rating = 5;
          comment = "Great product!";
          date = "2024-05-23T08:56:21.620Z";
          reviewerName = "Noah Hernandez";
          reviewerEmail = "noah.hernandez@x.dummyjson.com";
        },
      ];
      returnPolicy = "7 days return policy";
      minimumOrderQuantity = 8;
      meta = {
        createdAt = "2024-05-23T08:56:21.620Z";
        updatedAt = "2024-05-23T08:56:21.620Z";
        barcode = "3325493172934";
        qrCode = "https://assets.dummyjson.com/public/qr-code.png";
      };
      images = [
        "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"
      ];
      thumbnail = "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png";
    },
    {
      id = 2;
      title = "Eyeshadow Palette with Mirror";
      description = "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.";
      category = "beauty";
      price = 19.99;
      discountPercentage = 5.5;
      rating = 3.28;
      stock = 44;
      tags = [
        "beauty",
        "eyeshadow",
      ];
      brand = "Glamour Beauty";
      sku = "MVCFH27F";
      weight = 3;
      dimensions = {
        width = 12.42;
        height = 8.63;
        depth = 29.13;
      };
      warrantyInformation = "1 year warranty";
      shippingInformation = "Ships in 2 weeks";
      availabilityStatus = "In Stock";
      reviews = [
        {
          rating = 4;
          comment = "Very satisfied!";
          date = "2024-05-23T08:56:21.618Z";
          reviewerName = "Liam Garcia";
          reviewerEmail = "liam.garcia@x.dummyjson.com";
        },
        {
          rating = 1;
          comment = "Very disappointed!";
          date = "2024-05-23T08:56:21.618Z";
          reviewerName = "Nora Russell";
          reviewerEmail = "nora.russell@x.dummyjson.com";
        },
        {
          rating = 5;
          comment = "Highly impressed!";
          date = "2024-05-23T08:56:21.618Z";
          reviewerName = "Elena Baker";
          reviewerEmail = "elena.baker@x.dummyjson.com";
        },
      ];
      returnPolicy = "30 days return policy";
      minimumOrderQuantity = 32;
      meta = {
        createdAt = "2024-05-23T08:56:21.618Z";
        updatedAt = "2024-05-23T08:56:21.618Z";
        barcode = "2817839095220";
        qrCode = "https://assets.dummyjson.com/public/qr-code.png";
      };
      images = [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
      ];
      thumbnail = "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png";
    },
    {
      id = 3;
      title = "Powder Canister";
      description = "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.";
      category = "beauty";
      price = 14.99;
      discountPercentage = 18.14;
      rating = 3.82;
      stock = 59;
      tags = [
        "beauty",
        "face powder",
      ];
      brand = "Velvet Touch";
      sku = "9EN8WLT2";
      weight = 8;
      dimensions = {
        width = 24.16;
        height = 10.7;
        depth = 11.07;
      };
      warrantyInformation = "2 year warranty";
      shippingInformation = "Ships in 1-2 business days";
      availabilityStatus = "In Stock";
      reviews = [
        {
          rating = 5;
          comment = "Very happy with my purchase!";
          date = "2024-05-23T08:56:21.618Z";
          reviewerName = "Ethan Thompson";
          reviewerEmail = "ethan.thompson@x.dummyjson.com";
        },
        {
          rating = 4;
          comment = "Great value for money!";
          date = "2024-05-23T08:56:21.618Z";
          reviewerName = "Levi Hicks";
          reviewerEmail = "levi.hicks@x.dummyjson.com";
        },
        {
          rating = 5;
          comment = "Highly impressed!";
          date = "2024-05-23T08:56:21.618Z";
          reviewerName = "Hazel Gardner";
          reviewerEmail = "hazel.gardner@x.dummyjson.com";
        },
      ];
      returnPolicy = "60 days return policy";
      minimumOrderQuantity = 25;
      meta = {
        createdAt = "2024-05-23T08:56:21.618Z";
        updatedAt = "2024-05-23T08:56:21.618Z";
        barcode = "0516267971277";
        qrCode = "https://assets.dummyjson.com/public/qr-code.png";
      };
      images = [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
      ];
      thumbnail = "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png";
    },
    {
      id = 4;
      title = "Red Lipstick";
      description = "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.";
      category = "beauty";
      price = 12.99;
      discountPercentage = 19.03;
      rating = 2.51;
      stock = 68;
      tags = [
        "beauty",
        "lipstick",
      ];
      brand = "Chic Cosmetics";
      sku = "O5IF1NTA";
      weight = 5;
      dimensions = {
        width = 14.37;
        height = 13.94;
        depth = 14.6;
      };
      warrantyInformation = "Lifetime warranty";
      shippingInformation = "Ships in 2 weeks";
      availabilityStatus = "In Stock";
      reviews = [
        {
          rating = 5;
          comment = "Great product!";
          date = "2024-05-23T08:56:21.619Z";
          reviewerName = "Leo Rivera";
          reviewerEmail = "leo.rivera@x.dummyjson.com";
        },
        {
          rating = 4;
          comment = "Very pleased!";
          date = "2024-05-23T08:56:21.619Z";
          reviewerName = "Oscar Powers";
          reviewerEmail = "oscar.powers@x.dummyjson.com";
        },
        {
          rating = 5;
          comment = "Very pleased!";
          date = "2024-05-23T08:56:21.619Z";
          reviewerName = "Carter Rivera";
          reviewerEmail = "carter.rivera@x.dummyjson.com";
        },
      ];
      returnPolicy = "90 days return policy";
      minimumOrderQuantity = 6;
      meta = {
        createdAt = "2024-05-23T08:56:21.619Z";
        updatedAt = "2024-05-23T08:56:21.619Z";
        barcode = "9444582199406";
        qrCode = "https://assets.dummyjson.com/public/qr-code.png";
      };
      images = [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
      ];
      thumbnail = "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png";
    },
    {
      id = 5;
      title = "Red Nail Polish";
      description = "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.";
      category = "beauty";
      price = 8.99;
      discountPercentage = 2.46;
      rating = 3.91;
      stock = 71;
      tags = [
        "beauty",
        "nail polish",
      ];
      brand = "Nail Couture";
      sku = "YUIIIP4W";
      weight = 9;
      dimensions = {
        width = 8.11;
        height = 10.89;
        depth = 29.06;
      };
      warrantyInformation = "1 year warranty";
      shippingInformation = "Ships in 1 week";
      availabilityStatus = "In Stock";
      reviews = [
        {
          rating = 5;
          comment = "Very pleased!";
          date = "2024-05-23T08:56:21.619Z";
          reviewerName = "Leo Rivera";
          reviewerEmail = "leo.rivera@x.dummyjson.com";
        },
        {
          rating = 5;
          comment = "Great product!";
          date = "2024-05-23T08:56:21.619Z";
          reviewerName = "Evan Reed";
          reviewerEmail = "evan.reed@x.dummyjson.com";
        },
        {
          rating = 4;
          comment = "Highly recommended!";
          date = "2024-05-23T08:56:21.619Z";
          reviewerName = "Evelyn Sanchez";
          reviewerEmail = "evelyn.sanchez@x.dummyjson.com";
        },
      ];
      returnPolicy = "No return policy";
      minimumOrderQuantity = 28;
      meta = {
        createdAt = "2024-05-23T08:56:21.619Z";
        updatedAt = "2024-05-23T08:56:21.619Z";
        barcode = "1573412214210";
        qrCode = "https://assets.dummyjson.com/public/qr-code.png";
      };
      images = [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
      ];
      thumbnail = "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png";
    },
    {
      id = 6;
      title = "Foundation Brush";
      description = "The Foundation Brush is a high-quality tool designed for flawless application of foundation. Its soft bristles provide even coverage and a smooth finish.";
      category = "beauty";
      price = 11.99;
      discountPercentage = 7.85;
      rating = 2.37;
      stock = 15;
      tags = [
        "beauty",
        "brush",
      ];
      brand = "Beauty Pro";
      sku = "8PFT6OEK";
      weight = 7;
      dimensions = {
        width = 25.64;
        height = 12.03;
        depth = 24.62;
      };
      warrantyInformation = "1 year warranty";
      shippingInformation = "Ships in 2-3 days";
      availabilityStatus = "Out of Stock";
      reviews = [
        {
          rating = 5;
          comment = "Great quality!";
          date = "2024-05-23T08:56:21.619Z";
          reviewerName = "Amelia Stewart";
          reviewerEmail = "amelia.stewart@x.dummyjson.com";
        },
        {
          rating = 3;
          comment = "Average performance.";
          date = "2024-05-23T08:56:21.619Z";
          reviewerName = "Mia Bennett";
          reviewerEmail = "mia.bennett@x.dummyjson.com";
        },
        {
          rating = 4;
          comment = "Works well.";
          date = "2024-05-23T08:56:21.619Z";
          reviewerName = "Noah Baker";
          reviewerEmail = "noah.baker@x.dummyjson.com";
        },
      ];
      returnPolicy = "30 days return policy";
      minimumOrderQuantity = 13;
      meta = {
        createdAt = "2024-05-23T08:56:21.619Z";
        updatedAt = "2024-05-23T08:56:21.619Z";
        barcode = "8350827229186";
        qrCode = "https://assets.dummyjson.com/public/qr-code.png";
      };
      images = [
        "https://cdn.dummyjson.com/products/images/beauty/Foundation%20Brush/1.png"
      ];
      thumbnail = "https://cdn.dummyjson.com/products/images/beauty/Foundation%20Brush/thumbnail.png";
    },
  ];

  stable var orders : [Types.Order] = [];
  stable var order_payments : [Types.Payment] = [];

  // Stable array to store user carts as an array of UserCart objects
  stable var user_carts : [Types.UserCart] = [];

  public query func transform(raw : Types.TransformArgs) : async Types.CanisterHttpResponsePayload {
    let transformed : Types.CanisterHttpResponsePayload = {
      status = raw.response.status;
      body = raw.response.body;
      headers = [
        {
          name = "Content-Security-Policy";
          value = "default-src 'self'";
        },
        { name = "Referrer-Policy"; value = "strict-origin" },
        { name = "Permissions-Policy"; value = "geolocation=(self)" },
        {
          name = "Strict-Transport-Security";
          value = "max-age=63072000";
        },
        { name = "X-Frame-Options"; value = "DENY" },
        { name = "X-Content-Type-Options"; value = "nosniff" },
      ];
    };
    transformed;
  };

  public func get_products() : async [Types.Product] {
    return products;
  };

  public func searchProduct(productName : Text) : async [Types.Product] {
    //search for the product using the product
    let matchingProducts = Array.filter<Types.Product>(
      products,
      func(product) {
        Text.contains(product.title, #text productName);
      },
    );

    matchingProducts;
  };

  public func getProductById(productId : Nat) : async Types.GetProductByIdResult {
    // Check if the product ID is valid
    if (productId < 0) {
      return #err("Invalid product ID.");
    };

    //find the product using the product id
    let product = Array.find<Types.Product>(products, func(item : Types.Product) { item.id == productId });

    switch (product) {
      case (?product) {
        return #ok(product);
      };
      case null {
        return #err("No matching product found.");
      };
    };

  };

  public func getCategoryProducts(category : Text) : async Text {

    // Define the management canister
    let ic : Types.IC = actor ("aaaaa-aa");

    // Set up the URL for the request
    let host : Text = "securemart-worker.securemart.workers.dev";
    let url : Text = "https://" # host # "/proxy/products/category/" # category;

    // Set up the headers for the request
    let request_headers = [
      { name = "Host"; value = host # ":443" },
      { name = "User-Agent"; value = "product_canister" },
    ];

    // Define the transformation context
    let transform_context : Types.TransformContext = {
      function = transform;
      context = Blob.fromArray([]);
    };

    // Create the HTTP request
    let http_request : Types.HttpRequestArgs = {
      url = url;
      max_response_bytes = null; // optional for request
      headers = request_headers;
      body = null; // optional for request
      method = #get;
      transform = ?transform_context;
    };

    // Add cycles for the request
    Cycles.add(20_849_982_400);

    // Make the HTTP request and wait for the response
    let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);

    // Convert the response body from Nat8 array to a Blob
    let response_body : Blob = Blob.fromArray(http_response.body);

    // Decode the Blob into a UTF-8 Text string
    let decoded_text : Text = switch (Text.decodeUtf8(response_body)) {
      case (null) { "No value returned" };
      case (?y) { y };
    };

    // Optionally, extract and return the prodict from the decoded JSON text
    decoded_text;
  };

  // Function to add or update products in a user's cart
  public func addProductToCart(id : Nat, title : Text, price : Float, quantity : Nat, imageUrl : Text, user : Text) : async Text {
    // Input Validation
    if (id < 1) {
      return "Invalid product ID.";
    };

    if (title.size() == 0) {
      return "Invalid product title.";
    };

    if (price <= 0.1) {
      return "Invalid product price.";
    };

    if (quantity < 1) {
      return "Invalid product quantity.";
    };

    //check if the user has an active cart
    var user_cart = Array.filter<Types.UserCart>(
      user_carts,
      func(entry) {
        entry.identity == user;
      },
    );

    if (Array.size(user_cart) > 0) {
      //means the user has an active cart;
      //Step 1: Check if the cart has the above product in the cart
      var userCart = user_cart[0].cart;

      //check if the product is within the cart
      // Check if the product already exists in the cart
      let existingProduct = Array.find<Types.CartItem>(userCart, func(item : Types.CartItem) { item.id == id });

      let newCart = switch (existingProduct) {
        case (?existingProduct) {
          // Product exists, update quantity
          Array.map<Types.CartItem, Types.CartItem>(
            userCart,
            func(ele : Types.CartItem) {
              if (ele.id == id) {
                {
                  id = ele.id;
                  title = ele.title;
                  price = ele.price;
                  quantity = ele.quantity + quantity;
                  imageUrl = ele.imageUrl;
                };

              } else {
                ele;
              };
            },
          );
        };
        case null {
          // Add the new product to the cart
          let newProduct = {
            id = id;
            title = title;
            price = price;
            quantity = quantity;
            imageUrl = imageUrl;
          };
          userCart := Array.append(userCart, [newProduct]); // Append the new product to the cart
        };
      };

      return "Product added to cart successfully!";
    } else {
      //create a new cart
      var cart : [Types.CartItem] = [];
      let product = {
        id = id;
        title = title;
        price = price;
        quantity = quantity;
        imageUrl = imageUrl;
      };

      cart := Array.append(
        cart,
        [product],
      );

      let userCart = {
        identity = user;
        cart = cart;
      };

      user_carts := Array.append(user_carts, [userCart]);
      return "Product added to cart";
    };

  };

  //2. Getting all products in the cart
  public query func getUserCart(userPrincipal : Text) : async [Types.UserCart] {
    let userCart = Array.filter<Types.UserCart>(
      user_carts,
      func(entry) {
        entry.identity == userPrincipal;
      },
    );
    return userCart;
  };

  public func clearUserCart(user_principal : Text) : async Text {

    if (user_principal == "") {
      return "Provide a valid user principal";
    };

    let userCartsToClear = Array.filter<Types.UserCart>(
      user_carts,
      func(ele) {
        ele.identity != user_principal;
      },
    );

    if (Array.size(userCartsToClear) == 0) {
      return user_principal # "'s cart is not available.";
    };

    user_carts := userCartsToClear;

    return user_principal # "'s cart has been cleared!";
  };

  public func createOrder(id : Text, items : [Types.CartItem], paymentStatus : Text, modeOfPayment : Text, monthlyInstallments : Nat, monthlyInstallmentPayment : Float, totalAmount : Float, orderDate : Text, orderedBy : Text) : async Text {
    let newOrder = {
      id = id;
      items = items;
      totalAmount = totalAmount;
      orderDate = orderDate;
      orderedBy = orderedBy;
      paymentStatus = paymentStatus;
      modeOfPayment = modeOfPayment;
      monthlyInstallments = monthlyInstallments;
      monthlyInstallmentPayment = monthlyInstallmentPayment;
      remainingMonthlyInstallments = monthlyInstallments;
    };

    orders := Array.append(orders, [newOrder]);

    //save the payment information into the order payments array.
    let newPayment = {
      orderId = id;
      paymentType = "Deposit";
      dateOfPayment = orderDate;
      amount = (0.6 * totalAmount);
      paidBy = orderedBy;
      monthInstallment = 0;
    };

    order_payments := Array.append(order_payments, [newPayment]);

    "Order has been created";
  };

  public func clearOrders(callerPrincipal : Text) : async Text {
    let adminPrincipal : Text = "2vxsx-fae";

    // Check if the caller is the admin
    if (callerPrincipal == adminPrincipal) {
      orders := [];
      return "All orders have been cleared successfully.";
    } else {
      return "Unauthorized access: Only admins can clear orders.";
    };
  };

  public query (msg) func whoami() : async Text {
    Principal.toText(msg.caller);
  };

  public query func getOrders() : async [Types.Order] {
    orders;
  };

  public query func getUserOrders(user_principal : Text) : async [Types.Order] {
    let userOrders = Array.filter<Types.Order>(
      orders,
      func(order) {
        order.orderedBy == user_principal;
      },
    );
    userOrders;
  };

  public func makeOrderInstallmentPayment(orderId : Text, paidBy : Text, amount : Float, dateOfPayment : Text, paymentType : Text, monthInstallment : Nat) : async Text {
    if (orderId == "") {
      return "Order ID is required";
    };

    // Check if the order exists
    let existingOrders = Array.filter<Types.Order>(
      orders,
      func(order) {
        order.id == orderId;
      },
    );

    if (Array.size(existingOrders) == 0) {
      return "Order " # orderId # " details not found!";
    };

    // Prepare the installment payment record
    let installmentPayment = {
      orderId = orderId;
      paidBy = paidBy;
      amount = amount;
      dateOfPayment = dateOfPayment;
      paymentType = paymentType;
      monthInstallment = monthInstallment;
    };

    var paymentSuccessMessage : Text = "";

    // Check if it's the last installment month and update order accordingly
    orders := Array.map<Types.Order, Types.Order>(
      orders,
      func(ele : Types.Order) {
        if (ele.id == orderId) {
          if (ele.monthlyInstallments == monthInstallment) {
            // Completing the payment for the order
            paymentSuccessMessage := "Final payment made successfully!";
            return {
              id = orderId;
              items = ele.items;
              totalAmount = ele.totalAmount;
              orderDate = ele.orderDate;
              orderedBy = ele.orderedBy;
              paymentStatus = "COMPLETED";
              modeOfPayment = ele.modeOfPayment;
              monthlyInstallments = ele.monthlyInstallments;
              monthlyInstallmentPayment = ele.monthlyInstallmentPayment;
              remainingMonthlyInstallments = 0;
            };
          } else {
            // Customer has more upcoming payments
            paymentSuccessMessage := "Payment made successfully! Remaining installments updated.";
            return {
              id = orderId;
              items = ele.items;
              totalAmount = ele.totalAmount;
              orderDate = ele.orderDate;
              orderedBy = ele.orderedBy;
              paymentStatus = ele.paymentStatus;
              modeOfPayment = ele.modeOfPayment;
              monthlyInstallments = ele.monthlyInstallments;
              monthlyInstallmentPayment = ele.monthlyInstallmentPayment;
              remainingMonthlyInstallments = ele.monthlyInstallments - monthInstallment;
            };
          };
        } else {
          return ele;
        };
      },
    );

    // Append the new installment payment to the order payments array
    order_payments := Array.append(order_payments, [installmentPayment]);

    return paymentSuccessMessage;
  };

  public query func getOrderPaymentHistory(orderId : Text) : async [Types.Payment] {
    let orderPayments = Array.filter<Types.Payment>(
      order_payments,
      func(payment) {
        payment.orderId == orderId;
      },
    );

    return orderPayments;
  };

};
