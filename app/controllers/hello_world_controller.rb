# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"
  def index
    @rails_props = { rails: 'from rails' }
  end
end
