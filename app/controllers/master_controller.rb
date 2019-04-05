# frozen_string_literal: true

class MasterController < ApplicationController
  layout "master"
  def index
    @rails_props = { rails: 'from rails' }
  end
end
