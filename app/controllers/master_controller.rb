# frozen_string_literal: true

class MasterController < ApplicationController
  layout 'master'

  def index
    @rails_props = { currentUser: current_user&.slice(:email) }
  end
end
