# frozen_string_literal: true

class MasterController < ApplicationController
  layout "master"
  def index
    @rails_props = { current_user: current_user&.slice(:email) }
  end
end
