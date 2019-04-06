class ApplicationController < ActionController::Base
	protect_from_forgery with: :null_session
	respond_to :html, :json
end
