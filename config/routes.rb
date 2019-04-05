# frozen_string_literal: true

Rails.application.routes.draw do
  get '/', to: 'master#index'
  get '*path', to: 'master#index'
end
