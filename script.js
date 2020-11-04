// @ts-ignore

const Selection_Offroad = document.getElementById(
  "checkout-button-price_1HjAvsIWuSqa6zJxuXaCLvKh"
);
Selection_Offroad.addEventListener("click", _GetOffroad);

const Selection_Economy = document.getElementById(
  "checkout-button-price_1HjAOeIWuSqa6zJx6C93kUQd"
);
Selection_Economy.addEventListener("click", _GetEconomy);

const Selection_Sport = document.getElementById(
  "checkout-button-price_1HjATwIWuSqa6zJxvWj0CxEr"
);
Selection_Sport.addEventListener("click", _GetSport);

function _GetOffroad() {
  var stripe = Stripe(
    "pk_test_51HZiRtIWuSqa6zJxL9ZNlTO305JzgIQ7ahCVyxJ0z4RRGCheQF6wFAKt2IUKdqlzDNroYbwwdQDWtoFg0zFrOxJf00oNPF3mr2"
  );
  stripe
    .redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        { price: "price_1HjAvsIWuSqa6zJxuXaCLvKh", quantity: 1 },
      ],
      mode: "payment",
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled",
    })
    .then(function (result) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    });
}

function _GetEconomy() {
  var stripe = Stripe(
    "pk_test_51HZiRtIWuSqa6zJxL9ZNlTO305JzgIQ7ahCVyxJ0z4RRGCheQF6wFAKt2IUKdqlzDNroYbwwdQDWtoFg0zFrOxJf00oNPF3mr2"
  );
  stripe
    .redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        { price: "price_1HjAOeIWuSqa6zJx6C93kUQd", quantity: 1 },
      ],
      mode: "payment",
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled",
    })
    .then(function (result) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    });
}

function _GetSport() {
  var stripe = Stripe(
    "pk_test_51HZiRtIWuSqa6zJxL9ZNlTO305JzgIQ7ahCVyxJ0z4RRGCheQF6wFAKt2IUKdqlzDNroYbwwdQDWtoFg0zFrOxJf00oNPF3mr2"
  );
  stripe
    .redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        { price: "price_1HjATwIWuSqa6zJxvWj0CxEr", quantity: 1 },
      ],
      mode: "payment",
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled",
    })
    .then(function (result) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    });
}
