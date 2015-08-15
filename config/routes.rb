Rails.application.routes.draw do
  resources :orders
  resources :products
  resources :buyers
  root 'home#index'
end
