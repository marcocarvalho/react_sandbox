Rails.application.routes.draw do
  resources :orders do
    resources :items, controller: 'orders/items', only: [:index]
  end
  resources :products
  resources :buyers
  root 'home#index'
end
