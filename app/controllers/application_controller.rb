class ApplicationController < ActionController::Base
	respond_to :json
	protect_from_forgery with: :null_session
	# before_action :set_default_response_format, if: :devise_controller?
	before_action :configure_permitted_parameters, if: :devise_controller?


	protected

	# def set_default_response_format
	# 	request.format = :json
	# end

	def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:session, keys: [:email, :password])
  end
end
