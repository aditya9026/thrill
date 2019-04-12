# frozen_string_literal: true

Rails.application.routes.draw do
  root 'master#index'

  devise_for :users, path: '', controllers: {
    registrations: 'registrations',
    sessions: 'sessions',
    passwords: 'passwords',
    confirmations: 'confirmations',
    unlocks: 'unlocks'
  }

  get '*path', to: 'master#index'
end
