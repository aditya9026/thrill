Rails.application.routes.draw do
  get '/', to: 'hello_world#index'
  get '*path', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
