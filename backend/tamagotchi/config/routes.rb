Rails.application.routes.draw do
  resources :actions
  resources :action_types
  resources :pets
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
