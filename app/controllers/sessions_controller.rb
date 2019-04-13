class SessionsController < Devise::SessionsController
  after_action :set_csrf_headers, only: [:create, :destroy]
  skip_before_action :verify_authenticity_token
  respond_to :json

  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    yield resource if block_given?
    render json: { current_user: resource&.slice(:email) }, status: 200
  end

  protected

  def set_csrf_headers
    if request.format.json?
      response.headers['X-CSRF-Param'] = request_forgery_protection_token
      response.headers['X-CSRF-Token'] = form_authenticity_token
    end
  end
end
