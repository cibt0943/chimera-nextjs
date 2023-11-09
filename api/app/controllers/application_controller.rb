class ApplicationController < ActionController::Base
  include Secured

  before_action :snake_case_params

  private

  def snake_case_params
    request.parameters.deep_transform_keys!(&:underscore)
  end
end
