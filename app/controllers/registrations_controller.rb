class RegistrationsController < Devise::RegistrationsController
  after_action :set_csrf_headers, only: [:create]
  respond_to :json

  protected

  def set_csrf_headers
    if request.format.json?
      response.headers['X-CSRF-Param'] = request_forgery_protection_token
      response.headers['X-CSRF-Token'] = form_authenticity_token
    end
  end
end
