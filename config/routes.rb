# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'master#index'
  devise_for :users

  get '*path', to: 'master#index'
end
