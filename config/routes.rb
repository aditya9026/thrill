# frozen_string_literal: true

Rails.application.routes.draw do
  root 'master#index'
  devise_for :users

  get '*path', to: 'master#index'
end
