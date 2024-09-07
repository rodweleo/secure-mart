import Blob "mo:base/Blob";
import Cycles "mo:base/ExperimentalCycles";
import Array "mo:base/Array";
import Text "mo:base/Text";
import Types "Types";
import Principal "mo:base/Principal";
import Nat "mo:base/Nat";

actor {

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

  public func get_products() : async Text {

    let ic : Types.IC = actor ("aaaaa-aa");

    let host : Text = "dummyjson.com";
    let url : Text = "https://" # host # "/products";

    let request_headers = [
      { name = "Host"; value = host # ":443" },
      { name = "User-Agent"; value = "product_canister" },
    ];

    let transform_context : Types.TransformContext = {
      function = transform;
      context = Blob.fromArray([]);
    };

    let http_request : Types.HttpRequestArgs = {
      url = url;
      max_response_bytes = null;
      headers = request_headers;
      body = null;
      method = #get;
      transform = ?transform_context;
    };

    // Add cycles for the request
    Cycles.add(20_949_972_000);

    let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);

    // Convert the response body from Nat8 array to a Blob
    let response_body : Blob = Blob.fromArray(http_response.body);

    // Decode the Blob into a UTF-8 Text string
    let decoded_text : Text = switch (Text.decodeUtf8(response_body)) {
      case (null) { "No value returned" };
      case (?y) { y };
    };

    // Optionally, extract and return the products array from the decoded JSON text
    decoded_text;
  };

  public func searchProduct(productName : Text) : async Text {

    // Defining the management canister
    let ic : Types.IC = actor ("aaaaa-aa");

    // Setting up the URL for the request
    let host : Text = "dummyjson.com";
    let url : Text = "https://" # host # "/products/search?q=" # productName;

    // Setting up the headers for the request
    let request_headers = [
      { name = "Host"; value = host # ":443" },
      { name = "User-Agent"; value = "product_canister" },
    ];

    // Defining the transformation context
    let transform_context : Types.TransformContext = {
      function = transform;
      context = Blob.fromArray([]);
    };

    // Creating the HTTP request
    let http_request : Types.HttpRequestArgs = {
      url = url;
      max_response_bytes = null;
      headers = request_headers;
      body = null;
      method = #get;
      transform = ?transform_context;
    };

    // Add cycles for the request
    Cycles.add(20_949_972_000);

    // Making the HTTP request and waiting for the response
    let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);

    // Converting the response body from Nat8 array to a Blob
    let response_body : Blob = Blob.fromArray(http_response.body);

    // Decoding the Blob into a UTF-8 Text string
    let decoded_text : Text = switch (Text.decodeUtf8(response_body)) {
      case (null) { "No value returned" };
      case (?y) { y };
    };

    // returning the found products
    decoded_text;
  };

  public func getProductById(productId : Nat) : async Text {

    // Define the management canister
    let ic : Types.IC = actor ("aaaaa-aa");

    // Set up the URL for the request
    let host : Text = "dummyjson.com";
    let url : Text = "https://" # host # "/products/" # Nat.toText(productId);

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
    Cycles.add(20_849_587_200);

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

  public func getCategoryProducts(category : Text) : async Text {

    // Define the management canister
    let ic : Types.IC = actor ("aaaaa-aa");

    // Set up the URL for the request
    let host : Text = "dummyjson.com";
    let url : Text = "https://" # host # "/products/category/" # category;

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
    Cycles.add(20_849_587_200);

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

  //DEFINING THE LOGIC FOR THE CART
  stable var cart : [Types.CartItem] = [];

  //1. Adding a product to the cart

  //2. Getting all products in the cart
  public query func getCart() : async [Types.CartItem] {
    cart;
  };

  public func clearCart() : async Text {
    cart := []; //clearing the cart

    "Your cart has been cleared";
  };

  stable var orders : [Types.Order] = [];

  public func createOrder(id : Text, items : [Types.CartItem], totalAmount : Float, orderDate : Text, customerPrincipal : Text) : async Text {
    let newOrder = {
      id = id;
      items = items;
      totalAmount = totalAmount;
      orderDate = orderDate;
      customerPrincipal = customerPrincipal;
    };

    orders := Array.append(orders, [newOrder]);

    "Order has been created";
  };

  public func addProductToCart(id : Nat, title : Text, price : Float, quantity : Nat, imageUrl : Text, callerPrincipal : Text) : async Text {
    // Input Validation

    // Validate product ID
    if (id <= 0) {
      return "Invalid product ID.";
    };

    // Validate title
    if (title.size() == 0) {
      // Example length validation
      return "Invalid product title.";
    };

    // Validate price
    if (price <= 0.0) {
      return "Invalid product price.";
    };

    // Validate quantity
    if (quantity <= 0) {
      return "Invalid product quantity.";
    };

    // Validate image URL (basic validation, can be extended with regex)
    if (imageUrl.size() == 0) {
      return "Invalid image URL.";
    };

    // Concurrency Handling
    // Here we use an atomic operation to ensure that no two users modify the cart simultaneously.
    // Find the product in the cart
    let existingProduct = Array.find<Types.CartItem>(cart, func(item) { item.id == id });

    switch (existingProduct) {
      case (?existingProduct) {
        // Product already exists in the cart, update its quantity and total price
        cart := Array.map<Types.CartItem, Types.CartItem>(
          cart,
          func(item) {
            if (item.id == id) {
              {
                id = item.id;
                title = item.title;
                price = item.price; // Keep original price
                quantity = item.quantity + quantity; // Update quantity
                imageUrl = item.imageUrl;
              };
            } else {
              item; // Return the item unchanged
            };
          },
        );

        return "Product quantity updated in cart.";
      };
      case null {
        // Product does not exist in the cart, add it
        let newProduct = {
          id = id;
          title = title;
          price = price;
          quantity = quantity;
          imageUrl = imageUrl;
        };

        cart := Array.append(cart, [newProduct]); // Add the new product to the cart
        return "Product added to cart successfully.";
      };
    };
  };

  public func clearOrders(callerPrincipal : Text) : async Text {
    // Replace with your actual admin principal or list of admin principals
    let adminPrincipal : Text = "your_admin_principal_here";

    // Check if the caller is the admin
    if (callerPrincipal == adminPrincipal) {
      orders := []; // Clear all orders
      return "All orders have been cleared successfully.";
    } else {
      return "Unauthorized access: Only admins can clear orders.";
    };
  };

  public query (msg) func whoami() : async Text {
    Principal.toText(msg.caller);
  };

  public query func getOrders(callerPrincipal : Text) : async [Types.Order] {
    // Replace with your actual admin principal or list of admin principals
    let adminPrincipal : Text = "your_admin_principal_here";

    // Check if the caller is the admin
    if (callerPrincipal == adminPrincipal) {
      return orders; // Return all orders if the caller is an admin
    } else {
      // Return only the orders belonging to the caller
      let userOrders = Array.filter<Types.Order>(
        orders,
        func(order) {
          order.customerPrincipal == callerPrincipal;
        },
      );
      return userOrders;
    };
  };

  public query func getUserOrders(customerPrincipal : Text) : async [Types.Order] {
    let userOrders = Array.filter<Types.Order>(
      orders,
      func(order) {
        order.customerPrincipal == customerPrincipal;
      },
    );
    userOrders;
  };

};
